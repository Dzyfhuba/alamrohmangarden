import React from 'react'
import Main from '../Layouts/Main'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../Components/Button'
import { useProSidebar } from 'react-pro-sidebar'

type Props = {}

const Dashboard = (props: Props) => {
  const { collapseSidebar } = useProSidebar()
  return (
    <Main>
      <Button onClick={() => collapseSidebar()}><GiHamburgerMenu /></Button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem facilis dolore earum molestiae eum, non accusamus, culpa obcaecati nemo iste eligendi? Dignissimos nisi quisquam perferendis facere similique accusamus ab.
    </Main>
  )
}

export default Dashboard