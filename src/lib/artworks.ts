
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
    title: 'Sovereign Gaze',
    description: 'A portrait that commands attention. The subject\'s direct and piercing gaze captures a story of power, introspection, and unshakeable confidence.',
    imageId: 'artwork-1',
    featured: true,
  },
  {
    id: '2',
    title: 'Gilded Fracture',
    description: 'An abstract exploration of precious metals and dark voids. This piece plays with texture and light, resembling molten gold breaking through obsidian rock.',
    imageId: 'artwork-2',
    featured: true,
  },
  {
    id: '3',
    title: 'Psyche\'s Canvas',
    description: 'A vibrant explosion of color and form, mapping the chaotic and beautiful landscape of the subconscious. A journey through a dream state.',
    imageId: 'artwork-3',
    featured: true,
  },
  {
    id: '4',
    title: 'Stoic Visage',
    description: 'A portrait of profound strength and resilience. The subject\'s features are carved with experience, their expression a testament to quiet endurance.',
    imageId: 'artwork-4',
  },
  {
    id: '5',
    title: 'Chromatic Pulse',
    description: 'A symphony of color in motion. This piece captures a moment of pure, uninhibited creation, where pigments collide and flow with energetic life.',
    imageId: 'artwork-5',
  },
  {
    id: '6',
    title: 'Metropolis Heartbeat',
    description: 'An abstract grid that echoes the rhythm of a city. The structured lines and layered textures evoke the feeling of urban energy and hidden pathways.',
    imageId: 'artwork-6',
  },
  {
    id: '7',
    title: 'Ephemeral Grace',
    description: 'Capturing a fleeting moment of serene beauty. This commissioned portrait highlights the delicate interplay of light, shadow, and emotion.',
    imageId: 'artwork-7',
  },
  {
    id: '8',
    title: 'Analog Ghost',
    description: 'A haunting and beautiful piece that merges classic portraiture with digital-age distortion, exploring identity in a world of fleeting data.',
    imageId: 'artwork-8',
  },
  {
    id: '9',
    title: 'Veridian Cipher',
    description: 'An abstract dive into the secret language of nature. Deep greens and complex textures hint at the hidden, organic patterns that govern the wild.',
    imageId: 'artwork-9',
  },
];
