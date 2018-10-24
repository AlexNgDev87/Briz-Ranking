
using System.ComponentModel.DataAnnotations;

namespace WebsiteRanking.Models
{
    public class SearchViewModel
    {
        [Required]
        public string Url { get; set; }
        [Required]
        public string Keyword { get; set; }
    }
}
