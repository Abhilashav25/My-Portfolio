import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './CertificateStyle'; // Corrected import statement
import CertificationCard from '../Cards/CertificationCard'; // Corrected import statement

import { certifications } from '../../data/constants'; // Corrected import statement

const Certifications = () => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Here are my achievements in academic and extra-curricular activities.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'sports', 'internship', 'hackathon', 'others'].map((btnValue) => (
            <ToggleButton
              key={btnValue}
              active={toggle === btnValue}
              onClick={() => setToggle(btnValue)}
            >
              {btnValue.toUpperCase()}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {certifications
            .filter((item) => toggle === 'all' || item.category === toggle)
            .map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Certifications;
