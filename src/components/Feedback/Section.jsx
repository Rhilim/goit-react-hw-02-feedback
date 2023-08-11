import { SectionS } from "./Section.styled";



export const Section = ({title, children}) => {
  return (
  <SectionS>
    <h1>{title}</h1>
   {children}
  </SectionS>
  )
};
