import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionAboutProjectProps } from 'types/api'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  data: SectionAboutProjectProps
}

const SectionAboutProject = ({ data }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            loading="lazy"
            alt={data.image.alternativeText}
            src={getImageUrl(data.image.url)}
          />
        </S.Image>
        <div>
          <Heading>{data.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: data.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
