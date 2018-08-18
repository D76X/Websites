namespace CosmicMixer.Entities {
    public class SeriesAuthor {

        public int SeriesId { get; set; }
        public Series Series { get; set; }

        public int AuthorId { get; set; }
        public Author Author { get; set; }        
    }
}
