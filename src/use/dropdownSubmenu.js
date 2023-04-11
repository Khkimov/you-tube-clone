import {reactive, ref} from "vue";
import DropdownSettingsHeader from "../components/DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "../components/DropdownSettingsListItem.vue";
// // import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
// import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
export default function dropdownSubmenu() {

    const components = {
        DropdownSettingsListItem,
        DropdownSettingsHeader
    }

    const optionName = ref(null)
    const a = (b) => {
        optionName.value = b
    }

    const emit = defineEmits(['close', 'select-option'])
    const props = defineProps(['selectedOptions'])

    const selectOption = (option) => {
        emit('select-option', { name: optionName.value, value: option })
    }

    return {
        components,
        a,
        // optionName,
        emit,
        props,
        selectOption
    }
}