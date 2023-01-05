import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';

//components
import {Header, Footer, Avatar, Title, Descrip, Range} from "./Components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`
const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`
const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () =>{
    const [skillsCounter, setSkillsCounter] = React.useState(1)
    const [workCounter, setWorkCounter] = React.useState(1)

    const componentRef = React.useRef();
    const hemdelHeaderCliced = useReactToPrint({
        content: () => componentRef.current,
    })

    const hemdelAvatarCliced = () => console.log('isCliced')
    //const hemdelHeaderCliced = () => console.log('Head')

    return(  
      <div className="ui-wrapper">
        <Header onClick={hemdelHeaderCliced} />
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container" ref={componentRef}>
              <Row itemsCenter>
                <Sidebar>
                <Avatar onClick = {hemdelAvatarCliced}/>
                </Sidebar>
                <Content>
                <div>
                  <Title size='3'> Shuanov Max </Title>
                  <Descrip>Diligent software engineer with of experience in commercial
                     application and software development. Eager to join Cyclone Inc.
                     to build innovative and cutting-edge business solutions for the impressive suite of clients within its global reach.</Descrip>
                </div>
                </Content>
              </Row>
              <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me
                </Title>
                <Descrip>software engineer</Descrip>
                <Descrip isSecondary></Descrip>
                <Descrip isSecondary style={{ marginTop: '2rem'}}>contacts for communication</Descrip>
                <Descrip isPrimary>89806926840</Descrip>
                <Descrip isPrimary>@sweet62 - tg</Descrip>
                <Descrip isPrimary>maks_shuyanov@mail.ru</Descrip>
              </Sidebar>

                <Content>
                  <Title size='3' isUppercase>education</Title>
                  <Descrip isSecondary>Ivanovo State University of Chemistry and Technology</Descrip>
                  <Descrip isSecondary style={{ marginTop: '0.3rem'}}></Descrip>

                  <Title
                  isShowButton
                  isUppercase style={{ marginTop: '3rem' }}
                  size='3'
                  onClick={()=> setWorkCounter(workCounter + 1) }
                   >
                    Worc experience
                  </Title>
                  
                  <Descrip isSecondary>participant of the accelerator "Цифра"</Descrip>
                  <Descrip isSecondary style={{ marginTop: '0.3rem'}}></Descrip>
                  {new Array(workCounter).fill(1).map((_, i) => <Descrip key={i}>#{i} solutions </Descrip> )}
                  
                  <Title
                  isShowButton size='3'
                  isUppercase style={{ marginTop: '3rem' }}
                  onClick={()=> setSkillsCounter(skillsCounter + 1)}
                  >
                      Skils:
                  </Title>

                  {new Array(skillsCounter).fill(1).map((_, i) => <Range key={i} /> )}
                </Content>
              </Row>
          </div>
        </Wrapper>
      </div>
        <Footer />
    </div>
  );
};

export default App;
