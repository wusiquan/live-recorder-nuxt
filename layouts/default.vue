<template>
  <NConfigProvider :theme="theme">
    <NSpace vertical>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          content-style="padding: 24px;"
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <NMenu
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout>
          <!-- <n-layout-header>颐和园路</n-layout-header> -->
          <n-layout-content content-style="padding: 24px;">
            <slot />
          </n-layout-content>
        </n-layout>
      </n-layout>
    </NSpace>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, lightTheme, NSpace, NIcon, NMenu, NLayout, NLayoutSider, NLayoutContent } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon,
//   WineOutline as WineIcon
// } from '@vicons/ionicons5'

const theme = lightTheme

const activeKey = ref('')
const collapsed = ref(false)

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    // icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    // icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    // icon: renderIcon(BookIcon)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    // icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            // icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            // icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        // icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

// https://nuxt.com/docs/guide/directory-structure/layouts

// 测测没有layouts/default.vue
// 那么nuxt-layout中引入 #build/layouts 的结果是?
</script>