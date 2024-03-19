export interface Quoute {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  tags: string[];
  length: number;
  dateAdded: string;
  dateModified: string;
}
