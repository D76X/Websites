using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CosmicMixer.Entities {
    public class Author {

        public Author() {

            this.Tiles = new List<Tile>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Username { get; set; }

        [MaxLength(100)]
        public string Email { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }
                
        [MaxLength(100)]
        public string Surname { get; set; }

        public ICollection<Tile> Tiles { get; set; }
    }
}
