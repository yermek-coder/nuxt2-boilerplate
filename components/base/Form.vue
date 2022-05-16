<template>
  <section>
    <div class="container">
      <header>
        <h3>The title</h3>
        <p>
          A well written description of any project makes it possible for the
          indented audience (e.g. the sponsor, the executive) to understand the
          concept and context of the proposed project and to realize whether to
          approve and finance the project or not.
        </p>
      </header>
      <form>
        <h5>contact us</h5>
        <div class="inputs">
          <input placeholder="Your name" type="text" />
          <input placeholder="Email" type="email" />
          <textarea placeholder="Message" id="" cols="30" rows="2"></textarea>
        </div>
        <h5>THE TITLE №1</h5>
        <fieldset id="group1">
          <label for="radio1">
            <input
              type="radio"
              value="value1"
              name="group1"
              id="radio1"
              v-model="model"
            />Would you like to make a project with us?</label
          >

          <label for="radio2">
            <input
              type="radio"
              value="value2"
              name="group1"
              id="radio2"
              v-model="model"
            />Would you like to get technical expertise advice?</label
          >
          <label for="radio3">
            <input
              type="radio"
              value="value3"
              name="group1"
              id="radio3"
              v-model="model"
            />
            Would you like to become a part of our team?
          </label>
        </fieldset>
        <button type="submit" class="arrow-link">send<span></span></button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
}
</script>

<style lang="scss" scoped>
section {
  .container {
    header {
      h3 {
        text-transform: uppercase;
        margin: 16px 0;
        @include respond('lg') {
          margin: 50px 0;
        }
      }
    }
    form {
      margin-top: 16px;
      background: $primary;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      h5 {
        margin: 30px 0;
      }
      .inputs {
        > * {
          &:not(:last-child) {
            margin-bottom: 16px;
          }
          width: 100%;
          padding: 12px;
          &::placeholder {
            font-family: $font-main;
            font-weight: 500;
            font-size: 14px;
          }
        }
        &:active {
          border: none;
        }
        textarea {
          resize: none;
        }
      }
      fieldset {
        label {
          color: $secondary;
          display: block;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: 16px;
          }
          > input {
            appearance: none;
            background-color: transparent;
            margin-right: 14px;
            font: inherit;
            color: $white;
            width: 24px;
            aspect-ratio: 1;
            border: 2px solid $white;
            border-radius: 50%;
            display: grid;
            place-content: center;
            &::before {
              content: '';
              width: 0.65em;
              height: 0.65em;
              border-radius: 50%;
              transform: scale(0);
              transition: 120ms transform ease-in-out;
              box-shadow: inset 1em 1em $white;
            }
            &:checked {
              &::before {
                transform: scale(1);
              }
            }
          }
        }
      }
      .arrow-link {
        padding: 12px;
        margin: 24px 0;
        border: 2px solid white;
        text-transform: uppercase;
        font-weight: 700;
        background: transparent;
        color: $white;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
        &:hover {
          color: $primary;
          background: $white;
          span {
            background: $primary;
            mask: url('@/assets/images/icons/arrow-right.svg') no-repeat
              center/contain;
          }
        }
        span {
          height: 24px;
          width: 24px;
          float: right;
          background: url('@/assets/images/icons/arrow-right.svg') no-repeat
            center/contain;
        }
      }
    }
  }
}
</style>
