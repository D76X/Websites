namespace CosmicMixer.Entities {
    public class AuthorTag
    {
        public int AuthorId { get; set; }
        public Author Author { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
