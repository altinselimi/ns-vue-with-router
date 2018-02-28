<template>
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label :text="message" textWrap="true"/>
        <GridLayout columns="auto,auto" rows="auto,auto">
          <Button row="0" col="0" @tap="decrement" text="-"/>
          <Button row="0" col="1" @tap="increment" text="+"/>
          <Button row="1" colSpan="2" text="Psssh it's boring, take me home" @tap="$router.go(-1)" />
        </GridLayout>
      </StackLayout>
    </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return `Counter: ${this.$store.state.counter.count}`
      }
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>