import * as React from "react"
import Image from "next/image"
import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

interface Option {
  value: string
  label: string
  icon?: string | boolean
  lock?: boolean
}

interface SelectBoxProps {
  className?: string
  placeholder?: string
  value?: string
  defaultValue?: string | number
  options: Option[]
  isSearchable?: boolean
  isReportingCountry?: boolean
}

export default function SelectCountryBtn({
  className,
  placeholder,
  value,
  options,
  defaultValue = "",
  isSearchable = false,
}: SelectBoxProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    undefined
  );
  const [searchedOptions, setSearchedOptions] =
    React.useState<Option[]>(options);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options;

    setSearchedOptions((prev) =>
      prev.length === 0
        ? options
        : newOptions.filter(({ value }) => value.includes(e.target.value))
    );
  };

  const onSelectItem = (val: string) => {
    setSelectedValue(val);
    // Store the selected value in sessionStorage
    sessionStorage.setItem(placeholder!, val);
    console.log(val);
  };

  React.useEffect(() => {
    // Set the default value from sessionStorage when the component mounts
    const storedValue = sessionStorage.getItem(placeholder!);
    if (storedValue) {
      onSelectItem(storedValue);
      setSelectedValue(storedValue);
    }
  }, [placeholder]);

  // Close the dropdown when selectedValue changes
  React.useEffect(() => {
    const dropdown = document.querySelector(".MuiAutocomplete-popupIndicator");
    if (dropdown) {
      dropdown.click(); // Simulate a click on the dropdown indicator to close it
    }
  }, [selectedValue]);

  return (
    <Autocomplete
      sx={{ width: '15vw' }}
      size="small"
      disableCloseOnSelect
      options={searchedOptions}
      groupBy={(option) => option.label.charAt(0).toUpperCase()} // Group options by first letter
      getOptionLabel={(option) => option.label}
      value={options.find((o) => o.label === selectedValue) || null}
      onChange={(event, newValue) => onSelectItem(newValue?.label || "")}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label={selectedValue ? undefined : "Country"}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {option.icon && (
            <Image
              src={option.icon as string}
              alt="country-flag"
              height={20}
              width={20}
              unoptimized={true}
              style={{ marginRight: "4px" }}
            />
          )}
          {option.label}
        </Box>
      )}
    />
  );
}
