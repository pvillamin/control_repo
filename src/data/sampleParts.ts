export type PartCategory = 'Engine' | 'Electrical' | 'Body' | 'Interior' | 'Suspension';

export type Part = {
  id: string;
  name: string;
  category: PartCategory;
  vehicle: string;
  price: number;
  condition: 'Like New' | 'Good' | 'Fair';
  location: string;
  description: string;
  image: string;
};

export const sampleParts: Part[] = [
  {
    id: '1',
    name: 'Alternator - Honda Civic (2018)',
    category: 'Electrical',
    vehicle: 'Honda Civic',
    price: 120,
    condition: 'Good',
    location: 'San Diego, CA',
    description: 'OEM alternator tested and ready to install. 45k miles on donor car.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '2',
    name: 'Front Bumper - Ford F-150 (2016)',
    category: 'Body',
    vehicle: 'Ford F-150',
    price: 250,
    condition: 'Fair',
    location: 'Austin, TX',
    description: 'Minor scratches, no cracks. Comes with mounting brackets.',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '3',
    name: 'Leather Steering Wheel - BMW 3 Series (2017)',
    category: 'Interior',
    vehicle: 'BMW 3 Series',
    price: 180,
    condition: 'Like New',
    location: 'Seattle, WA',
    description: 'M Sport wheel with paddle shifters included. Excellent condition.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '4',
    name: 'Coilover Set - Subaru WRX (2015-2020)',
    category: 'Suspension',
    vehicle: 'Subaru WRX',
    price: 600,
    condition: 'Good',
    location: 'Denver, CO',
    description: 'Adjustable ride height and damping. Includes spanner wrenches.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '5',
    name: 'Cylinder Head - Toyota Camry (2014)',
    category: 'Engine',
    vehicle: 'Toyota Camry',
    price: 450,
    condition: 'Good',
    location: 'Chicago, IL',
    description: 'Pressure tested and resurfaced. Ready for install with valves seated.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=60'
  }
];
