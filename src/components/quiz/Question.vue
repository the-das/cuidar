<template>
  <div class="box">
    <!-- Question -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">문제 1</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-static" type="email" value="1 + 2 = ?" readonly>
          </p>
        </div>
      </div>
    </div>
    <!-- Text -->
    <div class="field is-horizontal">
      <div class="field-label is-normal"></div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea" type="text" readonly>1 + 1 = 2,/n 1 + 2 = ?,\n 1 + 3 = 4 one two three four five six seven eight nine ten 하나 둘 셋 넷 다섯 여섯 일곱 여덜 아홉 열</textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- Example -->
    <div class="field is-horizontal">
      <div class="field-label is-normal"></div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="rsvp">
              React
            </label>
          </div>
          <div class="control">
            <label class="radio">
              <input type="radio" name="rsvp">
              Polymer
            </label>
          </div>
          <div class="control">
            <label class="radio">
              <input type="radio" name="rsvp">
              Angular
            </label>
          </div>
          <div class="control">
            <label class="radio">
              <input type="radio" name="rsvp">
              Vue
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- Check Result -->
    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary" disabled>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Question -->
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">해설</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input is-static" type="email" value="1 + 2 = 3" readonly>
          </p>
        </div>
      </div>
    </div>
    <!-- Check Result -->
    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary" disabled>
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
