using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeRambo.Entities {
    public class Tile {

        public Tile() {
            this.TileTags = new List<TileTag>();
            this.TileSeries = new List<TileSeries>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Header { get; set; }

        [Required]
        [MaxLength(50)]
        public string Title { get; set; }

        [Required]
        public string UrlImage { get; set; }

        [Required]        
        public string UrlContent { get; set; }

        [Required]
        public DateTime Published { get; set; }

        [Required]
        public DateTime Edited { get; set; }

        [Required]
        public Author Author { get; set; }

        public ICollection<TileTag> TileTags { get; set; }

        public ICollection<TileSeries> TileSeries { get; set; }

        public Tile(
            int id,
            string header,
            string title,
            string urlImage,
            string urlContent,
            //string author,
            Author author,
            string urlAuthor,
            string published)
        {
            this.Id = id;
            this.Header = header;
            this.Title = title;
            this.UrlImage = urlImage;
            this.UrlContent = urlContent;
            //this.Author = author;
            //this.UrlAuthor = urlAuthor;
            //this.Published = published;
        }
    }
}
