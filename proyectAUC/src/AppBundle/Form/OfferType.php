<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;


class OfferType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('company')
                ->add('title')
                ->add('telephone')
                ->add('pdf', FileType::class, array(
                    'label' => 'PDF'))
                ->add('pdfLast', HiddenType::class)
                ->add('description')
                ->add('disabilities', EntityType::class, [
                    // busca opciones de esta entidad
                    'class' => 'AppBundle:Disability',
                
                    // utiliza la propiedad User.username como la cadena de opción visible
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]);

    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Offer'
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
