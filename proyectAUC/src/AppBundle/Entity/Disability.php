<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Disability
 *
 * @ORM\Table(name="disability")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\DisabilityRepository")
 */
class Disability
{
    /**
     * @var int
     *
     * @ORM\Column(name="iddi", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $iddi;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="grade", type="integer")
     */
    private $grade;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->iddi;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Disability
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description.
     *
     * @param string $description
     *
     * @return Disability
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set grade.
     *
     * @param int $grade
     *
     * @return Disability
     */
    public function setGrade($grade)
    {
        $this->grade = $grade;

        return $this;
    }

    /**
     * Get grade.
     *
     * @return int
     */
    public function getGrade()
    {
        return $this->grade;
    }
}
