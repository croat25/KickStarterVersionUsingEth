import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

const FormLayout = (props) => {
    render(
        <Form>
            <Form.Field>
                <label>Mnimum Contributions</label>
                <Input label="wei" labelPosition='right' />
            </Form.Field>

            <Button primary> Create!</Button>
        </Form>
      )
}

export default FormLayout