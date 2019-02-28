<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class UserType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('username')
                ->add('surname1')
                ->add('surname2')
                ->add('plainPassword',PasswordType::class, array(
                    'label' => 'Contraseña',
                    'required' => false))
                ->add('address')
                ->add('zipCode')
                ->add('telephone')
                ->add('location')
                ->add('email')
                ->add('bornDate', BirthdayType::class, [
                    'format' => 'dd-MM-yyyy',  
                    
                ])
                ->add('idDocument')
                ->add('comment')
                ->add('disabilities', EntityType::class, [
                    // busca opciones de esta entidad
                    'class' => 'AppBundle:Disability',
                
                    // utiliza la propiedad User.username como la cadena de opción visible
                    'choice_label' => 'name',
                    'multiple' => true,
                        'expanded' => true,
                ]);
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\User'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_user';
    }


}
