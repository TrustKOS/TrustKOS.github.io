import { ref, onMounted, onUnmounted, computed } from 'vue'

// 移动端断点（常用：768px）
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
    const isMobile = ref(false)

    function checkIsMobile() {
        isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    }

    onMounted(() => {
        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', checkIsMobile)
    })

    // 响应式计算属性
    return computed(() => isMobile.value)
}