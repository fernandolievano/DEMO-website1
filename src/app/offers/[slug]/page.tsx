import React from 'react';
import { notFound } from 'next/navigation';
import MainHeader from '@/components/header/MainHeader';
import PromocionesComponent from '@/components/sections/promociones/PromocionesComponent';
import PromocionBlockText from '@/components/sections/promociones/PromocionBlockText';
import { mockPromotions } from '../../data/promotions';

const PromotionPage = async ({ params }: { params: { slug: string; }; }) => {
  const promotion = mockPromotions.find(promotion => promotion.slug === params.slug);

  if (promotion == null) {
    notFound();  // Redirect to 404 page
  }

  return (
    <div className='min-h-screen'>
      <MainHeader image={promotion.cover.full} title={promotion.title} />

      <div className="w-full max-w-[640px] lg:max-w-[768px] mx-auto pt-16">
        <PromocionBlockText title='Details' description={promotion.description} />
        <PromocionBlockText title='Includes' description={promotion.include} />
        <PromocionBlockText title='Terms' description={promotion.conditions} />
        {promotion.legals !== '' && (
          <PromocionBlockText title='LEGAL' description={promotion.legals} />
        )}
      </div>

      {
        (mockPromotions != null) ? (
          <PromocionesComponent promotions={mockPromotions} />
        ) : (
          <h1 className='w-full py-4 text-center'>No promotions available</h1>
        )
      }
    </div>
  );
};

export default PromotionPage;