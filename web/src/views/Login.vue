<template>
    <div class="min-h-screen flex items-center justify-center bg-black font-adlam">
        <!-- Text spacer -->
      <div class="text-center space-y-6">
        <!-- Header -->
        <h1 class="text-white select-none text-9xl font-bold pb-8">ExeCute</h1>
        <!-- Login input -->
        <div>
          <label class="block text-white select-none text-3xl mb-2">Login</label>
          <input
            type="text"
            placeholder="Enter text..."
            class="w-64 px-4 py-2 rounded text-black focus:outline-none"
          />
        </div>
        <!-- Password input  -->
        <div>
          <label class="block text-white select-none text-3xl mb-2">Password</label>
          <input
            type="password"  
            placeholder="Enter text..."
            class="w-64 px-4 py-2 rounded text-black focus:outline-none"
          />
        </div>

        <div>
            <button class="bg-white hover:bg-gray-300 text-gray-800  py-1 px-9 border border-gray-400 rounded "
            @click = "goToDashboard"
            >
            Submit
            </button>
        </div>
      </div>
    </div>
  </template>

<!-- Setting up router navigation  -->
<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    // Setting going to Dashboard from Login screen
    const goToDashboard = () => {
    router.push('/dashboard')
    }
</script>