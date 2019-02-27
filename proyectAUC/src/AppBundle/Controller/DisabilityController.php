<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Disability;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

/**
 * Disability controller.
 *
 * @Route("disability")
 * @Security("is_granted('ROLE_ADMIN')")
 */
class DisabilityController extends Controller
{
    /**
     * Lists all disability entities.
     *
     * @Route("/", name="disability_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $disabilities = $em->getRepository('AppBundle:Disability')->findAll();

        return $this->render('disability/index.html.twig', array(
            'disabilities' => $disabilities,
        ));
    }

    /**
     * Creates a new disability entity.
     *
     * @Route("/new", name="disability_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $disability = new Disability();
        $form = $this->createForm('AppBundle\Form\DisabilityType', $disability);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($disability);
            $em->flush();

            return $this->redirectToRoute('disability_show', array('id' => $disability->getId()));
        }

        return $this->render('disability/new.html.twig', array(
            'disability' => $disability,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a disability entity.
     *
     * @Route("/{id}", name="disability_show")
     * @Method("GET")
     */
    public function showAction(Disability $disability)
    {
        $deleteForm = $this->createDeleteForm($disability);

        return $this->render('disability/show.html.twig', array(
            'disability' => $disability,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing disability entity.
     *
     * @Route("/{id}/edit", name="disability_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Disability $disability)
    {
        $deleteForm = $this->createDeleteForm($disability);
        $editForm = $this->createForm('AppBundle\Form\DisabilityType', $disability);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('disability_edit', array('id' => $disability->getId()));
        }

        return $this->render('disability/edit.html.twig', array(
            'disability' => $disability,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a disability entity.
     *
     * @Route("/{id}", name="disability_delete")
     * @Method({"GET", "DELETE"})
     */
    public function deleteAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $em->getRepository(Disability::class)->delete($id);

        return $this->redirectToRoute('disability_index');
    }

    /**
     * Creates a form to delete a disability entity.
     *
     * @param Disability $disability The disability entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Disability $disability)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('disability_delete', array('id' => $disability->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
