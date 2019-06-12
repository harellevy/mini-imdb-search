export interface IAppConfig {
  OMDB: {
    ROOT_PATH: string;
    IMG_ROOT_PATH: string;
    API_KEY: string;
  }
}

export const Config: IAppConfig = {
  OMDB: {
    ROOT_PATH: 'http://www.omdbapi.com/',
    IMG_ROOT_PATH: 'http://img.omdbapi.com/',
    API_KEY: 'c35e0f51'
  }
};
