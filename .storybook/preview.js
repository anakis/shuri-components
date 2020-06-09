import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    }    
})

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)