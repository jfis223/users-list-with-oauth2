interface FacebookPictureAttributesType {
  height: number;
  width: number;
  url: string;
}

interface FacebookPictureType {
  data: FacebookPictureAttributesType;
}

export interface FacebookLoginResponse {
  provider: "facebook";
  data: {
    name: string;
    email: string;
    id: string;
    picture: FacebookPictureType;
  };
}
