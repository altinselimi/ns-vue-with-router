<template>
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Button text="Psssh it's boring, take me home" @tap="$router.go(-1)" />
      </StackLayout>
    </Page>
</template>