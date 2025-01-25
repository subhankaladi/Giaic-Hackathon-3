export interface BannerData {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    title: string;
    subtitle: string;
    price: number;
    description: string;
    tags: string[];

  }