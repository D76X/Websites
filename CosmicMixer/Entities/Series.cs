﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CosmicMixer.Entities {

    public class Series {

        public Series() {

            this.TileSeries = new List<TileSeries>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]     
        public string Name { get; set; }

        public ICollection<TileSeries> TileSeries { get; set; }        
    }
}
