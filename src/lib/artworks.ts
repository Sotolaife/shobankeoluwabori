export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageId: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'The Sentinel',
    description: 'A textured, abstract portrait that emerges from the canvas, evoking a sense of ancient wisdom and silent observation. The layers suggest a history etched in time.',
    imageId: 'artwork-1',
    featured: true,
  },
  {
    id: '2',
    title: 'Solar Flare',
    description: 'A brilliant burst of golden-yellow and orange, capturing the raw, untamed energy of the sun. This piece radiates warmth and intense, vibrant power.',
    imageId: 'artwork-2',
    featured: true,
  },
  {
    id: '3',
    title: 'Oceanic Depth',
    description: 'Swirls of deep blue, white, and black create a turbulent, abstract seascape. It explores the powerful and mysterious nature of the ocean depths.',
    imageId: 'artwork-3',
    featured: true,
  },
  {
    id: '4',
    title: 'Gilded Rift',
    description: 'A striking composition where a river of gold leaf cuts through a stark, textured landscape of black and white, symbolizing value found in imperfection.',
    imageId: 'artwork-4',
  },
  {
    id: '5',
    title: 'Floral Burst',
    description: 'A vibrant explosion of abstract floral shapes and colors. This piece celebrates the wild, untamed beauty of a blooming garden.',
    imageId: 'artwork-5',
  },
  {
    id: '6',
    title: 'Fragmented Souls',
    description: 'A collection of abstract faces and figures overlapping and intertwining, exploring the complex and multifaceted nature of identity and connection.',
    imageId: 'artwork-6',
  },
  {
    id: '7',
    title: 'The Monarch',
    description: 'A regal portrait that combines classical form with modern abstraction. The subject\'s gaze holds a quiet authority and a deep, contemplative stillness.',
    imageId: 'artwork-7',
  },
  {
    id: '8',
    title: 'Woven Reality',
    description: 'Threads of vibrant color are woven together in a complex, fabric-like tapestry. This piece explores how individual moments and choices create the whole of our reality.',
    imageId: 'artwork-8',
  },
  {
    id: '9',
    title: 'The Watcher',
    description: 'A compelling portrait where the subject\'s direct gaze creates a powerful connection with the viewer, inviting a silent, intense dialogue.',
    imageId: 'artwork-9',
  },
];
