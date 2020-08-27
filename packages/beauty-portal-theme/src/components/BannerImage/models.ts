export interface BannerImageInterface {
  id: string;
  name: string;
  subheading?: string;
  headline?: string;
  image: any;
  _rawImage: any;
  _rawBody?: any;
  ctaLabel?: string;
  ctaUrl?: string;
  preferPerformance: boolean;
}
