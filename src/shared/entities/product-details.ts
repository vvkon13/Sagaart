type AuthorShow = {
  authorShow_id: number;
  authorShow_name: string;
  authorShow_year: string;
  authorShow_place: string;
};

type AuthorAchievement = {
  authorAchievement_id: number;
  authorAchievement_name: string;
};

export type ProductAuthor = {
  productAuthor_id: number;
  productAuthor_name: string;
  productAuthor_sex: number;
  productAuthor_age: string;
  productAuthor_year: string;
  productAuthor_show: AuthorShow;
  productAuthor_achievement: AuthorAchievement;
  productAuthor_city: string;
  productAuthor_city_live: string;
  productAuthor_education: string;
  productAuthor_education_art: string;
  productAuthor_teacher: string;
  productAuthor_style: string;
  productAuthor_social: string;
};

type AnalyticsDiagram = {
  analyticsDiagram_id: number;
  analyticsDiagram_cost: number;
  analyticsDiagram_date: string;
};

type ProductAnalytics = {
  productAnalytics_id: number;
  productAnalytics_cost: string;
  productAnalytic_collection: string;
  productAnalytic_cm: string;
  productAnalytic_date: string;
  analytics_diagram: AnalyticsDiagram;
};

type ProductCategory = {
  productCategory_id: number;
  productCategory_name: string;
};

type ProductStyle = {
  productStyle_id: number;
  productStyle_name: string;
};

type ProductGenre = {
  productGenre_id: number;
  productGenre_name: string;
};

export type Product = {
  product_id: number;
  product_name: string;
  product_jpeg1: string;
  product_jpeg2: string;
  product_category: ProductCategory;
  product_style: ProductStyle;
  product_genre: ProductGenre;
  product_size_category: number;
  product_size: string;
  product_country: string;
  product_city_sale: string;
  product_year: string;
  product_material1: string;
  product_material2: string;
  product_info: string;
  product_cost_category: number;
  product_cost_end: number;
  product_cost_fair: number;
  product_author: ProductAuthor;
  product_analytics: ProductAnalytics;
};