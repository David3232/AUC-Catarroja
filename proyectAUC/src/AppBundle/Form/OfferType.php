<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;


class OfferType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder->add('company')
                ->add('title')
                ->add('telephone');
            if ($options["update"]==null){
                $builder->add('pdfFile', FileType::class, ['mapped'=>false]);
            }else{
                $builder
                    ->add('pdfFile', FileType::class, ['required' => false,'mapped'=>false]);
            }
            $builder
                ->add('pdf',HiddenType::class,array('label'=>null))
                ->add('description')
                ->add('disabilities');
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Offer',
            'update' => null
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_offer';
    }


}
