'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const COLORS = [
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "violet",
    "indigo",
    "purple",
    "fuchsia",
    "pink",
    "rose"
];
const DEFAULT_THEME = "blue";
const THEME_DATA = {
    bg: {
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        amber: "bg-amber-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-emerald-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500"
    },
    bgHover: {
        blue: "hover:bg-blue-100",
        orange: "hover:bg-orange-100",
        yellow: "hover:bg-yellow-100",
        red: "hover:bg-red-100",
        purple: "hover:bg-purple-100",
        amber: "hover:bg-amber-100",
        lime: "hover:bg-lime-100",
        green: "hover:bg-green-100",
        emerald: "hover:bg-emerald-100",
        teal: "hover:bg-teal-100",
        cyan: "hover:bg-cyan-100",
        sky: "hover:bg-sky-100",
        indigo: "hover:bg-indigo-100",
        violet: "hover:bg-violet-100",
        fuchsia: "hover:bg-fuchsia-100",
        pink: "hover:bg-pink-100",
        rose: "hover:bg-rose-100"
    },
    ring: {
        blue: "focus:ring-blue-500/20",
        orange: "focus:ring-orange-500/20",
        yellow: "focus:ring-yellow-500/20",
        red: "focus:ring-red-500/20",
        purple: "focus:ring-purple-500/20",
        amber: "focus:ring-amber-500/20",
        lime: "focus:ring-lime-500/20",
        green: "focus:ring-green-500/20",
        emerald: "focus:ring-emerald-500/20",
        teal: "focus:ring-teal-500/20",
        cyan: "focus:ring-cyan-500/20",
        sky: "focus:ring-sky-500/20",
        indigo: "focus:ring-indigo-500/20",
        violet: "focus:ring-violet-500/20",
        fuchsia: "focus:ring-fuchsia-500/20",
        pink: "focus:ring-pink-500/20",
        rose: "focus:ring-rose-500/20"
    },
    borderFocus: {
        blue: "focus:border-blue-500",
        orange: "focus:border-orange-500",
        yellow: "focus:border-yellow-500",
        red: "focus:border-red-500",
        purple: "focus:border-purple-500",
        amber: "focus:border-amber-500",
        lime: "focus:border-lime-500",
        green: "focus:border-green-500",
        emerald: "focus:border-emerald-500",
        teal: "focus:border-teal-500",
        cyan: "focus:border-cyan-500",
        sky: "focus:border-sky-500",
        indigo: "focus:border-indigo-500",
        violet: "focus:border-violet-500",
        fuchsia: "focus:border-fuchsia-500",
        pink: "focus:border-pink-500",
        rose: "focus:border-rose-500"
    },
    text: {
        blue: "text-blue-500",
        orange: "text-orange-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
        purple: "text-purple-500",
        amber: "text-amber-500",
        lime: "text-lime-500",
        green: "text-green-500",
        emerald: "text-emerald-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        sky: "text-sky-500",
        indigo: "text-indigo-500",
        violet: "text-violet-500",
        fuchsia: "text-fuchsia-500",
        pink: "text-pink-500",
        rose: "text-rose-500"
    },
    textHover: {
        blue: "hover:text-blue-500",
        orange: "hover:text-orange-500",
        yellow: "hover:text-yellow-500",
        red: "hover:text-red-500",
        purple: "hover:text-purple-500",
        amber: "hover:text-amber-500",
        lime: "hover:text-lime-500",
        green: "hover:text-green-500",
        emerald: "hover:text-emerald-500",
        teal: "hover:text-teal-500",
        cyan: "hover:text-cyan-500",
        sky: "hover:text-sky-500",
        indigo: "hover:text-indigo-500",
        violet: "hover:text-violet-500",
        fuchsia: "hover:text-fuchsia-500",
        pink: "hover:text-pink-500",
        rose: "hover:text-rose-500"
    }
};

function useOnClickOutside(ref, handler) {
    React.useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

const CloseIcon = ({ className = "" }) => {
    return (React__default["default"].createElement("svg", { className: className, fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" })));
};
const ChevronIcon = ({ className = "" }) => {
    return (React__default["default"].createElement("svg", { className: className, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("path", { d: "M4.07771 6.91751C3.95121 7.17301 3.98121 7.47851 4.15371 7.70501L11.4037 17.205C11.6877 17.577 12.3117 17.577 12.5962 17.205L19.8462 7.70501C20.0192 7.47851 20.0487 7.17301 19.9222 6.91751C19.7962 6.66151 19.5352 6.50001 19.2502 6.50001L4.75021 6.50001C4.46521 6.50001 4.20421 6.66151 4.07771 6.91751Z", fill: "#393939" })));
};
const SearchIcon = ({ className = "" }) => {
    return (React__default["default"].createElement("svg", { className: className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })));
};

const SelectContext = React.createContext({
    value: null,
    handleValueChange: selected => {
        console.log("selected:", selected);
    },
    formatGroupLabel: null,
    formatOptionLabel: null,
    classNames: undefined
});
const useSelectContext = () => {
    return React.useContext(SelectContext);
};
const SelectProvider = ({ value, handleValueChange, otherData, children }) => {
    const store = React.useMemo(() => {
        return {
            value,
            handleValueChange,
            formatGroupLabel: otherData && typeof otherData.formatGroupLabel === "function"
                ? otherData.formatGroupLabel
                : null,
            formatOptionLabel: otherData && typeof otherData.formatOptionLabel === "function"
                ? otherData.formatOptionLabel
                : null,
            classNames: otherData?.classNames || undefined
        };
    }, [handleValueChange, otherData, value]);
    return React__default["default"].createElement(SelectContext.Provider, { value: store }, children);
};

const DisabledItem = ({ children }) => {
    const { classNames } = React.useContext(SelectContext);
    return (React__default["default"].createElement("div", { className: classNames && classNames.listDisabledItem
            ? classNames.listDisabledItem
            : "px-2 py-2 cursor-not-allowed truncate text-gray-400 select-none" }, children));
};

const Item = ({ item, primaryColor }) => {
    const { classNames, value, handleValueChange, formatOptionLabel } = useSelectContext();
    const isSelected = React.useMemo(() => {
        return value !== null && !Array.isArray(value) && value.value === item.value;
    }, [item.value, value]);
    const textHoverColor = React.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.textHover[primaryColor];
        }
        return THEME_DATA.textHover[DEFAULT_THEME];
    }, [primaryColor]);
    const bgColor = React.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.bg[primaryColor];
        }
        return THEME_DATA.bg[DEFAULT_THEME];
    }, [primaryColor]);
    const bgHoverColor = React.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.bgHover[primaryColor];
        }
        return THEME_DATA.bgHover[DEFAULT_THEME];
    }, [primaryColor]);
    const getItemClass = React.useCallback(() => {
        const baseClass = "block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded";
        const selectedClass = isSelected
            ? `text-white ${bgColor}`
            : `text-gray-500 ${bgHoverColor} ${textHoverColor}`;
        return classNames && classNames.listItem
            ? classNames.listItem({ isSelected })
            : `${baseClass} ${selectedClass}`;
    }, [bgColor, bgHoverColor, classNames, isSelected, textHoverColor]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, formatOptionLabel ? (React__default["default"].createElement("div", { onClick: () => handleValueChange(item) }, formatOptionLabel({ ...item, isSelected }))) : (React__default["default"].createElement(React__default["default"].Fragment, null, item.disabled ? (React__default["default"].createElement(DisabledItem, null, item.label)) : (React__default["default"].createElement("li", { tabIndex: 0, onKeyDown: (e) => {
            if (e.key === " " || e.key === "Enter") {
                handleValueChange(item);
            }
        }, "aria-selected": isSelected, role: "option", onClick: () => handleValueChange(item), className: getItemClass() }, item.label))))));
};

const GroupItem = ({ item, primaryColor }) => {
    const { classNames, formatGroupLabel } = useSelectContext();
    return (React__default["default"].createElement(React__default["default"].Fragment, null, item.options.length > 0 && (React__default["default"].createElement(React__default["default"].Fragment, null,
        formatGroupLabel ? (React__default["default"].createElement(React__default["default"].Fragment, null, formatGroupLabel(item))) : (React__default["default"].createElement("div", { className: classNames?.listGroupLabel
                ? classNames.listGroupLabel
                : "pr-2 py-2 cursor-default select-none truncate font-bold text-gray-700" }, item.label)),
        item.options.map((item, index) => (React__default["default"].createElement(Item, { primaryColor: primaryColor, key: index, item: item })))))));
};

const Options = ({ list, noOptionsMessage, text, isMultiple, value, primaryColor = DEFAULT_THEME }) => {
    const { classNames } = React.useContext(SelectContext);
    const filterByText = React.useCallback(() => {
        const filterItem = (item) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
        };
        let result = list.map(item => {
            if ("options" in item) {
                return {
                    label: item.label,
                    options: item.options.filter(filterItem)
                };
            }
            return item;
        });
        result = result.filter(item => {
            if ("options" in item) {
                return item.options.length > 0;
            }
            return filterItem(item);
        });
        return result;
    }, [text, list]);
    const removeValues = React.useCallback((array) => {
        if (!isMultiple) {
            return array;
        }
        if (Array.isArray(value)) {
            const valueId = value.map(item => item.value);
            const filterItem = (item) => !valueId.includes(item.value);
            let newArray = array.map(item => {
                if ("options" in item) {
                    return {
                        label: item.label,
                        options: item.options.filter(filterItem)
                    };
                }
                return item;
            });
            newArray = newArray.filter(item => {
                if ("options" in item) {
                    return item.options.length > 0;
                }
                else {
                    return filterItem(item);
                }
            });
            return newArray;
        }
        return array;
    }, [isMultiple, value]);
    const filterResult = React.useMemo(() => {
        return removeValues(filterByText());
    }, [filterByText, removeValues]);
    return (React__default["default"].createElement("div", { role: "options", className: classNames && classNames.list ? classNames.list : "max-h-72 overflow-y-auto" },
        filterResult.map((item, index) => (React__default["default"].createElement(React__default["default"].Fragment, { key: index }, "options" in item ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("div", { className: "px-2.5" },
                React__default["default"].createElement(GroupItem, { primaryColor: primaryColor || DEFAULT_THEME, item: item })),
            index + 1 < filterResult.length && React__default["default"].createElement("hr", { className: "my-1" }))) : (React__default["default"].createElement("div", { className: "px-2.5" },
            React__default["default"].createElement(Item, { primaryColor: primaryColor || DEFAULT_THEME, item: item })))))),
        filterResult.length === 0 && React__default["default"].createElement(DisabledItem, null, noOptionsMessage)));
};

const SearchInput = React.forwardRef(function SearchInput({ placeholder = "", value = "", onChange, name = "" }, ref) {
    const { classNames } = React.useContext(SelectContext);
    return (React__default["default"].createElement("div", { className: classNames && classNames.searchContainer
            ? classNames.searchContainer
            : "relative py-1 px-2.5" },
        React__default["default"].createElement(SearchIcon, { className: classNames && classNames.searchIcon
                ? classNames.searchIcon
                : "absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500" }),
        React__default["default"].createElement("input", { ref: ref, className: classNames && classNames.searchBox
                ? classNames.searchBox
                : "w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none", type: "text", placeholder: placeholder, value: value, onChange: onChange, name: name })));
});

const Spinner = ({ primaryColor = DEFAULT_THEME }) => {
    const spinnerColor = React.useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return THEME_DATA.text[primaryColor];
        }
        return THEME_DATA.text[DEFAULT_THEME];
    }, [primaryColor]);
    return (React__default["default"].createElement("svg", { className: `animate-spin mr-0.5 h-5 w-5 ${spinnerColor}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
        React__default["default"].createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        React__default["default"].createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })));
};

const Select = ({ options = [], value = null, onChange, onSearchInputChange, placeholder = "Select...", searchInputPlaceholder = "Search...", isMultiple = false, isClearable = false, isSearchable = false, isDisabled = false, loading = false, menuIsOpen = false, noOptionsMessage = "No options found", primaryColor = DEFAULT_THEME, formatGroupLabel = null, formatOptionLabel = null, classNames }) => {
    const [open, setOpen] = React.useState(menuIsOpen);
    const [list, setList] = React.useState(options);
    const [inputValue, setInputValue] = React.useState("");
    const ref = React.useRef(null);
    const searchBoxRef = React.useRef(null);
    React.useEffect(() => {
        const formatItem = (item) => {
            if ("disabled" in item)
                return item;
            return {
                ...item,
                disabled: false
            };
        };
        setList(options.map(item => {
            if ("options" in item) {
                return {
                    label: item.label,
                    options: item.options.map(formatItem)
                };
            }
            else {
                return formatItem(item);
            }
        }));
    }, [options]);
    React.useEffect(() => {
        if (isSearchable) {
            if (open) {
                searchBoxRef.current?.select();
            }
            else {
                setInputValue("");
            }
        }
    }, [open, isSearchable]);
    const toggle = React.useCallback(() => {
        if (!isDisabled) {
            setOpen(!open);
        }
    }, [isDisabled, open]);
    const closeDropDown = React.useCallback(() => {
        if (open)
            setOpen(false);
    }, [open]);
    useOnClickOutside(ref, () => {
        closeDropDown();
    });
    const onPressEnterOrSpace = React.useCallback((e) => {
        e.preventDefault();
        if ((e.code === "Enter" || e.code === "Space") && !isDisabled) {
            toggle();
        }
    }, [isDisabled, toggle]);
    const handleValueChange = React.useCallback((selected) => {
        function update() {
            if (!isMultiple && !Array.isArray(value)) {
                closeDropDown();
                onChange(selected);
            }
            if (isMultiple && (Array.isArray(value) || value === null)) {
                onChange(value === null ? [selected] : [...value, selected]);
            }
        }
        if (selected !== value) {
            update();
        }
    }, [closeDropDown, isMultiple, onChange, value]);
    const clearValue = React.useCallback((e) => {
        e.stopPropagation();
        onChange(null);
    }, [onChange]);
    const removeItem = React.useCallback((e, item) => {
        if (isMultiple && Array.isArray(value) && value.length) {
            e.stopPropagation();
            const result = value.filter(current => item.value !== current.value);
            onChange(result.length ? result : null);
        }
    }, [isMultiple, onChange, value]);
    const getSelectClass = React.useCallback(() => {
        let ringColor = THEME_DATA.ring[DEFAULT_THEME];
        if (COLORS.includes(primaryColor)) {
            ringColor = THEME_DATA.ring[primaryColor];
        }
        let borderFocus = THEME_DATA.borderFocus[DEFAULT_THEME];
        if (COLORS.includes(primaryColor)) {
            borderFocus =
                THEME_DATA.borderFocus[primaryColor];
        }
        const baseClass = "flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none";
        const defaultClass = `${baseClass} ${isDisabled
            ? "bg-gray-200"
            : `bg-white hover:border-gray-400 ${borderFocus} focus:ring ${ringColor}`}`;
        return classNames && classNames.menuButton
            ? classNames.menuButton({ isDisabled })
            : defaultClass;
    }, [classNames, isDisabled, primaryColor]);
    const getTagItemClass = React.useCallback((item) => {
        const baseClasse = "bg-gray-200 border rounded-sm flex space-x-1";
        const disabledClass = isDisabled ? "border-gray-500 px-1" : "pl-1";
        return classNames?.tagItem
            ? classNames.tagItem({ item, isDisabled })
            : `${baseClasse} ${disabledClass}`;
    }, [classNames, isDisabled]);
    return (React__default["default"].createElement(SelectProvider, { otherData: {
            formatGroupLabel,
            formatOptionLabel,
            classNames
        }, value: value, handleValueChange: handleValueChange },
        React__default["default"].createElement("div", { className: "relative w-full", ref: ref },
            React__default["default"].createElement("div", { "aria-expanded": open, onKeyDown: onPressEnterOrSpace, onClick: toggle, className: getSelectClass() },
                React__default["default"].createElement("div", { className: "grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1" }, !isMultiple ? (React__default["default"].createElement("p", { className: "truncate cursor-default select-none" }, value && !Array.isArray(value) ? value.label : placeholder)) : (React__default["default"].createElement(React__default["default"].Fragment, null,
                    value === null && placeholder,
                    Array.isArray(value) &&
                        value.map((item, index) => (React__default["default"].createElement("div", { className: getTagItemClass(item), key: index },
                            React__default["default"].createElement("p", { className: classNames?.tagItemText
                                    ? classNames.tagItemText
                                    : "text-gray-600 truncate cursor-default select-none" }, item.label),
                            !isDisabled && (React__default["default"].createElement("div", { role: "button", tabIndex: 0, onClick: e => removeItem(e, item), className: classNames?.tagItemIconContainer
                                    ? classNames.tagItemIconContainer
                                    : "flex items-center px-1 cursor-pointer rounded-r-sm hover:bg-red-200 hover:text-red-600" },
                                React__default["default"].createElement(CloseIcon, { className: classNames?.tagItemIcon
                                        ? classNames.tagItemIcon
                                        : "w-3 h-3 mt-0.5" }))))))))),
                React__default["default"].createElement("div", { className: "flex flex-none items-center py-1.5" },
                    loading && (React__default["default"].createElement("div", { className: "px-1.5" },
                        React__default["default"].createElement(Spinner, { primaryColor: primaryColor }))),
                    isClearable && !isDisabled && value !== null && (React__default["default"].createElement("div", { className: "px-1.5 cursor-pointer", onClick: clearValue },
                        React__default["default"].createElement(CloseIcon, { className: classNames?.closeIcon
                                ? classNames.closeIcon
                                : "w-5 h-5 p-0.5" }))),
                    React__default["default"].createElement("div", { className: "h-full" },
                        React__default["default"].createElement("span", { className: "w-px h-full inline-block text-white bg-gray-300 text-opacity-0" })),
                    React__default["default"].createElement("div", { className: "px-1.5" },
                        React__default["default"].createElement(ChevronIcon, { className: `transition duration-300 w-6 h-6 p-0.5${open ? " transform rotate-90 text-gray-500" : " text-gray-300"}` })))),
            open && !isDisabled && (React__default["default"].createElement("div", { className: classNames?.menu
                    ? classNames.menu
                    : "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700" },
                isSearchable && (React__default["default"].createElement(SearchInput, { ref: searchBoxRef, value: inputValue, placeholder: searchInputPlaceholder, onChange: e => {
                        if (onSearchInputChange &&
                            typeof onSearchInputChange === "function")
                            onSearchInputChange(e);
                        setInputValue(e.target.value);
                    } })),
                React__default["default"].createElement(Options, { list: list, noOptionsMessage: noOptionsMessage, text: inputValue, isMultiple: isMultiple, value: value, primaryColor: primaryColor || DEFAULT_THEME }))))));
};

module.exports = Select;
//# sourceMappingURL=index.cjs.js.map
