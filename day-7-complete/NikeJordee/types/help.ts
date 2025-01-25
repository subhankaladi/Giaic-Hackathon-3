export interface HelpType {
    _id: string;
    _type: string;
    subtitle : string;
    name : string;
    description : string;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    slug: {
        _type: 'slug';
        current: string;
      };
}