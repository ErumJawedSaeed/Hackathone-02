import { Coffee } from 'lucide-react';
import Heading from '@/components/Heading/heading';  
import Image from 'next/image';

const menuItems = [
  {
    name: "Grilled Chicken",
    description: "Tender grilled chicken breast served with fresh vegetables.",
    price: 15,
    calories: 350,
    highlight: true,
  },
  {
    name: "Beef Steak",
    description: "Juicy beef steak cooked to perfection with your choice of sauce.",
    price: 25,
    calories: 500,
    highlight: false,
  },
  {
    name: "Vegan Salad",
    description: "A fresh mix of organic greens and fruits, topped with a light dressing.",
    price: 12,
    calories: 200,
    highlight: false,
  },
  {
    name: "Pasta Alfredo",
    description: "Creamy Alfredo sauce with fettuccine and grilled shrimp.",
    price: 18,
    calories: 600,
    highlight: true,
  },
];

export default function MainCourse() {  
  return (
    <section className="w-full mx-auto mt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Main Course" />
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image
            src="/mainCourse.png" 
            alt="Main Course Dish" 
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}