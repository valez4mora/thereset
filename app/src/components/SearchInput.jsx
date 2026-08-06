import PropTypes from "prop-types"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export function SearchInput({
    placeholder = "",
    name = "search",
    value,
    onChange,
    icon,
    className = "",
}) {
    return (
        <InputGroup className={`w-70 h-12 ${className}`}>
            {icon && (
                <InputGroupAddon>
                    {icon}
                </InputGroupAddon>
            )}

            <InputGroupInput
                name={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputGroup>
    )
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.node,
    className: PropTypes.string,
}