import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered/react'

addDecorator(withInfo)
addDecorator(centered)

configure(require.context('../packages/components', true, /\.stories\.tsx$/), module)