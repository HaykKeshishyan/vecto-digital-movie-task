export interface Movie {
  id: string;
  title: string;
  category: string;
  releaseYear: string;
  mpaRating: string;
  duration: string;
  description: string;
  coverImage: string;
  titleImage?: string | null;
  videoUrl?: string | null;
  date: string;
  isTrending: boolean;
}

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "The Irishman",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "18+",
    duration: "6000",
    description: "A hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",
    coverImage: "https://images.unsplash.com/photo-1489599962465-8ca7ecb11b30?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1489599962465-8ca7ecb11b30?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "2021-10-24T12:16:50.894556",
    isTrending: true
  },
  {
    id: "2",
    title: "Kate",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "18+",
    duration: "2000",
    description: "A female assassin has 24 hours to get vengeance on her murderer before she dies.",
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    date: "2021-10-12T12:16:50.894556",
    isTrending: true
  },
  {
    id: "3",
    title: "Sherlock",
    category: "TV Show",
    releaseYear: "2021",
    mpaRating: "PG-13",
    duration: "2300",
    description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    date: "2021-10-11T12:16:50.894556",
    isTrending: true
  },
  {
    id: "4",
    title: "Red Notice",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "PG-13",
    duration: "6000",
    description: "An Interpol agent tracks the world's most wanted art thief.",
    coverImage: "https://images.unsplash.com/photo-1478720568477-b0ed2e5cd610?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1478720568477-b0ed2e5cd610?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    date: "2021-09-22T12:16:50.894556",
    isTrending: true
  },
  {
    id: "5",
    title: "Good Doctor",
    category: "TV Show",
    releaseYear: "2021",
    mpaRating: "PG-13",
    duration: "2700",
    description: "A young surgeon with autism and savant syndrome relocates from a quiet country life to join a prestigious hospital surgical unit.",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    date: "2021-08-22T12:16:50.894556",
    isTrending: true
  },
  {
    id: "6",
    title: "Sci-Fi Odyssey",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "PG-13",
    duration: "9000",
    description: "A journey through space and time in this epic science fiction adventure.",
    coverImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    date: "2021-10-22T12:16:50.894556",
    isTrending: true
  },
  {
    id: "7",
    title: "Action Thriller",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "R",
    duration: "8100",
    description: "An intense action-packed thriller that keeps you on the edge of your seat.",
    coverImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    date: "2021-11-22T12:16:50.894556",
    isTrending: true
  },
  {
    id: "8",
    title: "San Andreas",
    category: "Movie",
    releaseYear: "2021",
    mpaRating: "PG-13",
    duration: "6840",
    description: "A rescue pilot must navigate the destruction when a massive earthquake hits California.",
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&w=300&h=450&fit=crop",
    titleImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    date: "2021-07-14T12:16:50.894556",
    isTrending: true
  }
];

export const getFeaturedMovie = (): Movie => {
  return mockMovies[0]; // The Irishman as featured movie
};

export const getTrendingMovies = (limit = 50): Movie[] => {
  return mockMovies
    .filter(movie => movie.isTrending)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};