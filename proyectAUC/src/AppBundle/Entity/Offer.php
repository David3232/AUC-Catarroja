<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Offer
 *
 * @ORM\Table(name="offer")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\OfferRepository")
 */
class Offer
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /*
    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="offers")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
    private $user;
    */

    /**
     * @ORM\ManyToMany(targetEntity="Disability", inversedBy="offers")
     */
    private $disabilities;

    /**
     * @ORM\ManyToOne(targetEntity="Company", inversedBy="offers")
     * @ORM\JoinColumn(name="company_id", referencedColumnName="id")
     */
    private $company;

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 3
     * )
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="pdf", type="string", length=255)
     * @Assert\NotBlank(message="Please, upload the product brochure as a PDF file.")
     * @Assert\File(mimeTypes={ "application/pdf" })
     */
    private $pdf;

    /**
     * @var int
     *
     * @ORM\Column(name="telephone", type="integer")
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 9
     * )
     * @Assert\Type(
     *     type="integer"
     * )
     */
    private $telephone;

    /**
     * @return int
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * @param int $telephone
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;
    }

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 10
     * )
     */
    private $description;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getCompany()
    {
        return $this->company;
    }

    /**
     * @param mixed $company
     */
    public function setCompany($company)
    {
        $this->company = $company;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Offer
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set pdf
     *
     * @param string $pdf
     *
     * @return Offer
     */
    public function setPdf($pdf)
    {
        $this->pdf = $pdf;

        return $this;
    }

    /**
     * Get pdf
     *
     * @return string
     */
    public function getPdf()
    {
        return $this->pdf;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Offer
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->disabilities = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add disability.
     *
     * @param \AppBundle\Entity\Disability $disability
     *
     * @return Offer
     */
    public function addDisability(\AppBundle\Entity\Disability $disability)
    {
        $this->disabilities[] = $disability;

        return $this;
    }

    /**
     * Remove disability.
     *
     * @param \AppBundle\Entity\Disability $disability
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeDisability(\AppBundle\Entity\Disability $disability)
    {
        return $this->disabilities->removeElement($disability);
    }

    /**
     * Get disabilities.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDisabilities()
    {
        return $this->disabilities;
    }
}
