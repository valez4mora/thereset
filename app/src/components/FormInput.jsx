import { useId } from "react"
import PropTypes from "prop-types"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

import { Label } from "@/components/ui/label"

export function FormInput({
    label,
    placeholder,
    name,
    type = "text",
    icon,
    value,
    onChange,
}) {
    const id = useId()

    return (
        <div className="w-full space-y-2 mt-4">
            <Label htmlFor={id}>
                {label}
            </Label>

            <InputGroup>
                {icon && (
                    <InputGroupAddon>
                        {icon}
                    </InputGroupAddon>
                )}

                <InputGroupInput
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </InputGroup>
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.node,
    value: PropTypes.string,
    onChange: PropTypes.func,
}