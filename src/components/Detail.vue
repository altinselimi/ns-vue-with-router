<template>
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label horizontalAlignment="center" class="large" :text="message" textWrap="true"/>
        <GridLayout columns="*,*" rows="auto,auto">
          <Button class="counter" row="0" col="0" @tap="decrement" text="-"/>
          <Button class="counter" row="0" col="1" @tap="increment" text="+"/>
          <Button row="1" colSpan="2" text="Take me home" @tap="$router.go(-1)" />
        </GridLayout>
      </StackLayout>
    </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return `I love you this much! ${this.$store.state.counter.count}`
      }
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>