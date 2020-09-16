import { rentalTypes, saleTypes, otherTypes, jobTypes } from './itemTypes';

const job = {
  type: jobTypes,
  fieldName: 'Job Position',
  placeHolder: 'Write Job Position',
  hasprice: 'Mention Salary !!',
  price: 'Monthly Salary',
  address: 'Company Address',
  city: 'City',
  district: 'District',
  description: 'Job Description',
  addDescription: 'Add job Qualification',
  apply: [
    'Great Pay',
    'Weekeley Milestone review',
    'Great Location',
    'Yearly paid vacation',
  ],
  nearby: 'Add Nearby Place',
};

const sale = {
  type: saleTypes,
  fieldName: 'Short Name',
  placeHolder: 'Give Short Name',
  hasprice: 'Mention Price! (Recommended)',
  price: 'Price',
  address: 'Address',
  city: 'City',
  district: 'District',
  description: 'Short Description',
  addDescription: 'Add more Description',
  apply: [
    'Parking Available',
    'Furnished',
    'Road Facing',
    'Pet Frieldly',
    'New',
  ],
  nearby: 'Add Nearby Place',
};
const rent = {
  type: rentalTypes,
  fieldName: 'Short Name',
  placeHolder: 'Give Short Name',
  hasprice: 'Mention Price! (Recommended)',
  price: 'Price',
  address: 'Address',
  city: 'City',
  district: 'District',
  description: 'Short Description',
  addDescription: 'Add more Description',
  apply: [
    'parking Available',
    'Furnished Room',
    'Good Location',
    'Pet Frieldly',
    'Internet Included',
  ],
  nearby: 'Add Nearby Place',
};
const other = {
  type: otherTypes,
  fieldName: 'Short Name',
  placeHolder: 'Give Short Name',
  hasprice: 'Mention Price! (Recommended)',
  price: 'Price',
  address: 'Address',
  city: 'City',
  district: 'District',
  description: 'Short Description',
  addDescription: 'Add more Description',
  apply: ['Delivery Service'],
  nearby: 'Add Nearby Place',
};

export { job, sale, rent, other };
