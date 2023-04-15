<template>
  <div class="relative w-full">
    <input
      ref="inputRef"
      type="text"
      placeholder="Search"
      :class="classes"
      :value="props.query"
      @input="updateQuery($event.target.value)"
      @focus="setState(true)"
      @click.stop="setState(true)"
      @keyup.esc="handleEsc"
      @keydown.enter="handleEnter"
    />
    <button
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      v-show="props.query"
      @click="clear"
    >
      <BaseIcon name="x" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

const inputRef = ref(null)
const isActiveInput = ref(false)
const props = defineProps(['query', 'hasResults'])
const emit = defineEmits(['update:query', 'change-state', 'enter'])

onMounted(() => {
  if (window.innerWidth < 640) {
    inputRef.value.focus()
  }

  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})

const onKeydown = (event) => {
  const isInputFocused = inputRef.value === document.activeElement

  if (event.code === 'Slash' && !isInputFocused) {
    event.preventDefault()

    inputRef.value.focus()
  }
}

const updateQuery = (query) => {
  emit('update:query', query)
  setState(isActiveInput.value)
}

const setState = (isActive) => {
  isActiveInput.value = isActive

  emit('change-state', isActive)
}

const handleEsc = () => {
  if (isActiveInput.value && props.hasResults) {
    setState(false)
  } else {
    inputRef.value.blur()
  }
}

const handleEnter = () => {
  setState(false)

  inputRef.value.blur()

  emit('enter')
}

const clear = () => {
  inputRef.value.focus()

  updateQuery('')
}

const classes = computed(() => {
  return [
    'w-full',
    'h-full',
    'px-3',
    'shadow-inner',
    'rounded-bl-sm',
    'rounded-tl-sm',
    'border',
    'border-gray-300',
    'focus:border-blue-700',
    'focus:outline-none'
  ]
})
</script>
