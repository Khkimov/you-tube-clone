<template>
  <BaseModal>
    <p class="text-2xl mb-52">{{ text }}</p>
    <div class="flex justify-center items-center">
      <span
          v-show="isStatus('listening', 'recording')"
          :class="buttonAnimationClasses"
      ></span>
      <button :class="buttonClasses" @click="toggleRecording">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">Tap the microphone to try again</div>
  </BaseModal>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BaseModal from './BaseModal.vue'
import BaseIcon from './BaseIcon.vue'

const STATUS_IDLE = 'idle'
const STATUS_LISTENING = 'listening'
const STATUS_RECORDING = 'recording'
const STATUS_QUIET = 'quiet'

const status = ref(STATUS_LISTENING)
const recordingTimeout = ref(null)

const handleRecordingTimeout = () => {
  if (isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
    recordingTimeout.value = setTimeout(() => {
      updateStatus(STATUS_QUIET)
    }, 5000)
  }
}

const updateStatus = (statusQuiet) => {
  if (statusQuiet) {
    status.value = statusQuiet
  } else if (isStatus(STATUS_RECORDING)) {
    status.value = STATUS_IDLE
  } else if (isStatus(STATUS_LISTENING)) {
    status.value = STATUS_RECORDING
  } else {
    status.value = STATUS_LISTENING
  }
}

const toggleRecording = () => {
  clearTimeout(recordingTimeout.value)
  updateStatus()
  handleRecordingTimeout()
}

const isStatus = (...statuses) => {
  return statuses.includes(status.value)
}

onMounted(() => {
  handleRecordingTimeout()
})

onBeforeUnmount(() => {
  clearTimeout(recordingTimeout.value)
})

const text = computed(() => {
  if (isStatus(STATUS_QUIET)) {
    return "Didn't hear that. Try again"
  }

  if (isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
    return 'Listening...'
  }

  return 'Microphone off. Try again'
})
const buttonClasses = computed(() => {
  const bgColorClass = isStatus(STATUS_LISTENING, STATUS_RECORDING) ? 'bg-red-600' : 'bg-gray-300'

  const textColorClass = isStatus(STATUS_LISTENING, STATUS_RECORDING) ? 'text-white' : 'text-black'
  return [
    bgColorClass,
    textColorClass,
    'w-16',
    'h-16',
    'mx-auto',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'focus:outline-none'
  ]
})
const buttonHintClasses = computed(() => {
  return [
    isStatus(STATUS_LISTENING, STATUS_RECORDING) ? 'invisible' : 'visible',
    'text-center',
    'text-sm',
    'text-gray-500 mt-4'
  ]
})
const buttonAnimationClasses = computed(() => {
  return [
    isStatus(STATUS_RECORDING) ? 'bg-gray-300' : 'border border-gray-300',
    'animate-ping',
    'absolute',
    'w-14',
    'h-14',
    'rounded-full'
  ]
})
</script>
