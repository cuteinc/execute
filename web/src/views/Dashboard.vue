<template>
   <div class="flex h-screen w-screen bg-black text-white overflow-hidden">
    <!-- Left navigation bar -->
    <div class="w-16 h-full bg-navBar flex flex-col border-r border-gray-800">
      <!-- Back button -->
      <div class="h-28 w-16 flex items-center justify-center border-b border-white-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      
      <!-- Menu buttons -->
       <!-- Current active -->
        <button>
            <div class="h-16 w-16 flex items-center justify-center border-b border-white-800 bg-activeWindowNavBar">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </button>

      <button @click= "goToTeamsInfo">
        <div class="h-16 w-16 flex items-center justify-center border-b border-white-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </button>
      
      <button @click= "goToUserInfo">
        <div class="h-16 w-16 flex items-center justify-center border-b border-white-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </button>
      
      <button @click= "goToCalendar">
        <div class="h-16 w-16 flex items-center justify-center border-b border-white-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </button>
      
      
      <!-- Spacer -->
      <div class="flex-grow"></div>
      
      <!-- Bottom buttons -->
      <div class="h-16 w-16 flex items-center justify-center border-t border-white-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      
      <div class="h-16 w-16 flex items-center justify-center border-t border-white-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    
    <!-- Main content area -->
    <div class="flex-1 flex flex-col">
      <!-- Header bar -->
      <div class="bg-black pt-5 pb-3 px-8 border-b border-white/50 ">
        <div class="flex items-center">
          <h1 class="text-5xl font-semibold text-white font-adlam">ExeCute</h1>
        </div>
      </div>
      
      <!-- Team info section -->
      <div class="px-16 py-6">
        <div class="flex items-center">
          <h2 class="text-3xl text-white font-adlam">Team 1</h2>
          <div class="flex ml-4 -space-x-2">
            <!-- Team elements users placeholders  -->
            <div class="w-8 h-8 rounded-full bg-blue-500 border-2 border-black"></div>
            <div class="w-8 h-8 rounded-full bg-red-500 border-2 border-black"></div>
            <div class="w-8 h-8 rounded-full bg-yellow-500 border-2 border-black"></div>
          </div>
          <!-- Number of team members placeholder  -->
          <div class="ml-1 px-2 py-0.5 bg-gray-500 bg-opacity-50 rounded-full text-sm text-white">+21</div>
        </div>
        <!-- Points placeholder -->
        <div class="ml-1 text-[10px] text-white-300 font-adlam">Points: 100/1049</div>
      </div>
      
      <!-- Main content area (empty in screenshot) -->
      <div class="flex-grow bg-black">
        <!-- Empty content area -->
      </div>
      
      <!-- Optional: bunny character from your screenshot (commented out as requested) -->
      <!-- <div class="absolute bottom-4 right-4">
        <img src="/assets/bunny.png" alt="Character" class="w-32 h-32">
      </div> -->
    </div>
  </div>
</template>

<!-- Setting up router navigation  -->
<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    // Setting going to Dashboard from Login screen
    const goToCalendar = () => {
    router.push('/calendar')
    }
    const goToUserInfo = () => {
    router.push('/userinfo')
    }
    const goToTeamsInfo = () => {
    router.push('/teaminfo')
    }
</script>