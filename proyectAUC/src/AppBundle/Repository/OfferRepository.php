<?php

namespace AppBundle\Repository;

/**
 * OfferRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class OfferRepository extends \Doctrine\ORM\EntityRepository
{
    public function delete($id) {
        $em = $this->getEntityManager();
        $delete = $this->findOneById($id);

        $em->remove($delete);
        $em->flush();
    }
}
