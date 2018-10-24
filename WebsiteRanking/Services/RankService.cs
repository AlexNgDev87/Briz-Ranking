using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WebsiteRanking.Services
{
    public class RankService
    {
        private string _url;
        private string _keyword;
        private string _baseSearchUrl = "https://www.google.com/search";

        public RankService(string url, string keyword)
        {
            _url = url;
            _keyword = keyword;
        }

        public async Task<List<int>> GetRankings()
        {
            HttpClient client = new HttpClient();

            var requestUrl = $"{_baseSearchUrl}?igu=1&ei=&q={ _keyword.Replace(" ", "+") }&as_oq={ _keyword.Replace(" ", "+") }&num=100";
            var response = await client.GetAsync(requestUrl);

            var content = await response.Content.ReadAsStringAsync();
            var patterns = "(<cite.*?>)(.*?)(<\\/cite>)";

            // Retrieve all the urls that are enclosed in the <cite></cite> tag
            MatchCollection matches = Regex.Matches(content, patterns);
            
            var rank = 0;
            var positions = new List<int>();

            if (matches.Count > 0)
            {
                foreach (Match m in matches)
                {
                    ++rank;

                    // Remove all the html tags from text within the matched string 
                    var matchedUrl = Regex.Replace(m.Groups[2].Value, @"<[^>]*>", string.Empty);
                    if (matchedUrl.Contains(_url))
                        positions.Add(rank);
                }
            }

            return positions;
        }
    }
}
