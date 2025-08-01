type PriceGroupItemProps = {
  title: string;
  price: string;
};

const PriceGroupItem = ({ title, price }: PriceGroupItemProps) => (
  <li className="flex items-center w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
    <span className="inline-flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      {price}
    </span>
  </li>
);

export default PriceGroupItem;
